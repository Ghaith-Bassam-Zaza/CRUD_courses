from .database import prisma
from . import schemas

async def create_course(course: schemas.CourseCreate):
    return await prisma.course.create(data=course.dict())

async def get_courses(user_id: str):
    return await prisma.course.find_many(where={"userId": user_id})

async def update_course(course_id: int, data: schemas.CourseUpdate):
    return await prisma.course.update(where={"id": course_id}, data=data.dict())

async def delete_course(course_id: int):
    return await prisma.course.delete(where={"id": course_id})
