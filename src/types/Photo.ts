
export interface Photo {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  size: number;
  createdAt: Date;
  altText?: string;
}

export type SortOption = 'name' | 'date' | 'size';
export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  option: SortOption;
  direction: SortDirection;
}
