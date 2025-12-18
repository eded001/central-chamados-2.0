'use client';

import * as React from 'react';
import { useId } from 'react';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Types
export interface NavbarSearchProps extends React.HTMLAttributes<HTMLElement> {
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export const NavbarSearch = React.forwardRef<HTMLElement, NavbarSearchProps>(
  (
    {
      className,
      searchPlaceholder = 'Search...',
      searchValue,
      onSearchChange,
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <header
        ref={ref}
        className={cn('', className)}
        {...props}
      >
        <div className="flex h-16 items-center">
          <div className="relative flex-1">
            <Input
              id={`search-${id}`}
              type="search"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="peer h-8 w-full ps-8 pe-2"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2 text-muted-foreground/80">
              <SearchIcon size={16} />
            </div>
          </div>
        </div>
      </header>
    );
  }
);

NavbarSearch.displayName = 'NavbarSearch';