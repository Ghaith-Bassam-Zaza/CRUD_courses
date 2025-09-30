from fastapi import APIRouter
from app import schemas, crud


router = APIRouter(prefix="/courses", tags=["courses"])

@router.post("/", response_model=schemas.CourseResponse)
async def create(course: schemas.CourseCreate):
    return await crud.create_course(course)

@router.get("/{user_id}", response_model=list[schemas.CourseResponse])
async def list_courses(user_id: str):
    return await crud.get_courses(user_id)

@router.put("/{course_id}", response_model=schemas.CourseResponse)
async def update(course_id: int, data: schemas.CourseUpdate):
    return await crud.update_course(course_id, data)

@router.delete("/{course_id}")
async def delete(course_id: int):
    return await crud.delete_course(course_id)
