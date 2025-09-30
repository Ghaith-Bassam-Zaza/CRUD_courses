from fastapi import FastAPI
from app.routes import courses
from app.database import prisma
from fastapi.middleware.cors import CORSMiddleware
import dotenv   
app = FastAPI()

origins = [
    dotenv.get_key(dotenv.find_dotenv(), "FRONTEND_URL")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],   # allow POST, GET, PUT, DELETE, OPTIONS...
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    await prisma.connect()

@app.on_event("shutdown")
async def shutdown():
    await prisma.disconnect()

app.include_router(courses.router)

