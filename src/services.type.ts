export interface ITodo {
  created_at: string;
  created_by: CreatedBy;
  description: string;
  id: string;
  title: string;
  updated_at: string;
}

export interface CreatedBy {
  id: string;
  username: string;
}
