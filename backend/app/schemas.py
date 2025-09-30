from pydantic import BaseModel
from datetime import datetime

class CourseBase(BaseModel):
    title: str
    category: str
    duration: int

class CourseCreate(CourseBase):
    userId: str

class CourseUpdate(CourseBase):
    pass

class CourseResponse(CourseBase):
    id: int
    userId: str
    createdAt: datetime
    class Config:
        orm_mode = True
