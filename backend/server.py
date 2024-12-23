import os

from aiohttp import web

# Определяем путь к файлу websocket.html
WS_FILE = os.path.join(os.path.dirname(__file__), 'websocket.html')

async def wshandler(request: web.Request):
    """Описание соединения"""
    resp = web.WebSocketResponse() # объект http-ответа
    available = resp.can_prepare(request) # проверяем, можем ли ответить сразу в запрос (такое возможно только в WebSocket)
    if not available:
        with open(WS_FILE, "rb") as fp:
            return web.Response(body=fp.read(), content_type="text/html")

    await resp.prepare(request) # открываем соединение через веб-сокеты

    await resp.send_str("Welcome!") # отправляем приветственное сообщение

    try:
        """Отправляем уведомление всем пользователям о том, что присоединился новый"""
        print("Someone joined.")
        for ws in request.app["sockets"]:
            await ws.send_str("Someone joined")
        request.app["sockets"].append(resp)

        async for msg in resp:
            """Перебираем сообщения, поступившие от пользователя"""
            if msg.type == web.WSMsgType.TEXT:
                for ws in request.app["sockets"]:
                    if ws is not resp:
                        await ws.send_str(msg.data)
            else:
                return resp # resp - итератор, отдающий сообщения по одному по мере их поступления, если их нет -
                           # если сообщений нет, выполнение программы предаётся в Event Loop, который следит за входящими сообщениями
        return resp

    finally:
        """В блок finally попадаем, когда пользователь отключается, и выполнение цикла завершается, 
        а выполненние функции продолжается"""

        request.app["sockets"].remove(resp) # убираем соединение из списка
        print("Someone disconnected.")

        for ws in request.app["sockets"]:
            await ws.send_str("Someone disconnected.") # рассылаем сообщение о разрыве соединения

async def on_shutdown(app: web.Application):
    """Корректное завершение приложения и остановка сервера"""
    for ws in app["sockets"]:
        await ws.close()

def init():
    app = web.Application() # создание экземпляра приложения
    app["sockets"] = [] # сохраняем список для хранения всех соединений
    app.router.add_get("/", wshandler) # добавляем обработчик для GET-запросов по пути "/"
    app.on_shutdown.append(on_shutdown)
    return app

web.run_app(init(), port=8081) # передаём созданное приложение в web.run_app (там выполняется event loop)
                    # в нём же проверям: был ли это обычный GET-запрос или запрос на WebSocket-соединение

