import * as React from "react"
import { cn } from "@/lib/utils"

interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asChild?: boolean
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  side?: "left" | "right" | "top" | "bottom"
}

const SheetContext = React.createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({
  open: false,
  onOpenChange: () => {},
})

const Sheet = ({ children, open = false, onOpenChange = () => {}, ...props }: SheetProps) => {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      <div {...props}>
        {children}
      </div>
    </SheetContext.Provider>
  )
}
Sheet.displayName = "Sheet"

const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ className, children, asChild, onClick, ...props }, ref) => {
    const { onOpenChange } = React.useContext(SheetContext)
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onOpenChange(true)
      onClick?.(e)
    }

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        onClick: handleClick,
        ref,
      })
    }

    return (
      <button
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)
SheetTrigger.displayName = "SheetTrigger"

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, side = "right", ...props }, ref) => {
    const { open, onOpenChange } = React.useContext(SheetContext)

    if (!open) return null

    const sideClasses = {
      right: "inset-y-0 right-0 w-3/4 border-l sm:max-w-sm",
      left: "inset-y-0 left-0 w-3/4 border-r sm:max-w-sm",
      top: "inset-x-0 top-0 h-3/4 border-b",
      bottom: "inset-x-0 bottom-0 h-3/4 border-t",
    }

    return (
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
        {/* Content */}
        <div
          ref={ref}
          className={cn(
            "fixed z-50 bg-cyber-darker p-6 shadow-lg border-cyber-light",
            sideClasses[side],
            className
          )}
          {...props}
        >
          {children}
        </div>
      </>
    )
  }
)
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }
