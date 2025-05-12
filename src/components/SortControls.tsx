
import React from 'react';
import { Button } from '@/components/ui/button';
import { SortConfig, SortOption } from '@/types/Photo';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowDownNarrowWide, ArrowUpWideNarrow } from 'lucide-react';

interface SortControlsProps {
  sortConfig: SortConfig;
  onSortChange: (config: SortConfig) => void;
}

const SortControls: React.FC<SortControlsProps> = ({ sortConfig, onSortChange }) => {
  const handleSortOptionChange = (value: string) => {
    onSortChange({
      ...sortConfig,
      option: value as SortOption,
    });
  };

  const toggleSortDirection = () => {
    onSortChange({
      ...sortConfig,
      direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <div className="text-sm text-gray-500 mr-2">Sort by:</div>
      
      <Select value={sortConfig.option} onValueChange={handleSortOptionChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="size">File Size</SelectItem>
        </SelectContent>
      </Select>
      
      <Button
        variant="outline"
        size="icon"
        onClick={toggleSortDirection}
        className="h-10 w-10"
      >
        {sortConfig.direction === 'asc' ? (
          <ArrowUpWideNarrow className="h-4 w-4" />
        ) : (
          <ArrowDownNarrowWide className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default SortControls;
