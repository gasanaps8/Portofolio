export class Experience {
  constructor(
    public title: string,
    public company: string,
    public period: string,
    public description: string,
    public technologies: string[],
    public location?: string
  ) {}
}