import asyncio


async def do_async():
    print("hello, world")


async def main():
    await do_async()


asyncio.run(main())
