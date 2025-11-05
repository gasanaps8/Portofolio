export class Project {
  constructor(
    public title: string,
    public shortDescription: string,
    public fullDescription: string,
    public imageUrls: string[],
    public technologies: string[],
  ) {}
}