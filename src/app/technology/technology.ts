export class Technology {
  order: number;
  name: string;
  desc: string;
  comment: string;
  skill: string;
    constructor(order: number, name: string, desc: string, comment: string, skill: string) {
      this.order=order;
      this.name=name;
      this.desc=desc;
      this.comment=comment;
      this.skill=skill;
    }
}
