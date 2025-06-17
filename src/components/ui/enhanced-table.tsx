
import * as React from "react"
import { cn } from "@/lib/utils"

const EnhancedTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
EnhancedTable.displayName = "EnhancedTable"

const EnhancedTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead 
    ref={ref} 
    className={cn(
      "bg-slate-50 dark:bg-slate-900/50 [&_tr]:border-b [&_tr]:border-slate-200 dark:[&_tr]:border-slate-700", 
      className
    )} 
    {...props} 
  />
))
EnhancedTableHeader.displayName = "EnhancedTableHeader"

const EnhancedTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0 [&_tr]:border-b [&_tr]:border-slate-200 dark:[&_tr]:border-slate-700", className)}
    {...props}
  />
))
EnhancedTableBody.displayName = "EnhancedTableBody"

const EnhancedTableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-slate-50 dark:bg-slate-900/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
EnhancedTableFooter.displayName = "EnhancedTableFooter"

const EnhancedTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 data-[state=selected]:bg-slate-100 dark:data-[state=selected]:bg-slate-700",
      className
    )}
    {...props}
  />
))
EnhancedTableRow.displayName = "EnhancedTableRow"

const EnhancedTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-6 text-left align-middle font-semibold text-slate-900 dark:text-slate-100 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
EnhancedTableHead.displayName = "EnhancedTableHead"

const EnhancedTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("px-6 py-4 align-middle text-slate-700 dark:text-slate-300 [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
EnhancedTableCell.displayName = "EnhancedTableCell"

const EnhancedTableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-slate-600 dark:text-slate-400", className)}
    {...props}
  />
))
EnhancedTableCaption.displayName = "EnhancedTableCaption"

export {
  EnhancedTable,
  EnhancedTableHeader,
  EnhancedTableBody,
  EnhancedTableFooter,
  EnhancedTableHead,
  EnhancedTableRow,
  EnhancedTableCell,
  EnhancedTableCaption,
}
