export class Team {
  constructor(
    public id: number,
    public  name: string
  ) { }
}
export class Grade {
  constructor(
    public id: number,
    public  grade: string
  ) { }
}
export class User {
  constructor(
    public id: number,
    public  name: string,
    public surname: string,
    public FK_ROLE: number
  ) { }
}
export class Question {
  constructor(
    public id: number,
    public question: string,
    public FK_TEAM: number
  ) {}
}
export class GradeQuest {
  constructor(
    public questNum: number,
    public grade: string
  ){}
}
