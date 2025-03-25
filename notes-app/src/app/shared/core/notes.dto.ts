export interface NotesDto {
      name: string;
      id?: string;
      priority: number;
      status: 'Backlog' | 'Doing' | 'Completed';
      createdOn?: string;
}