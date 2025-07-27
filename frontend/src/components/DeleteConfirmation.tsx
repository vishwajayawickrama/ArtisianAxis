import { AlertTriangle, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog"

interface DeleteConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: (id: string) => Promise<void>
  title?: string
  description?: string
  itemName?: string
  itemId: string
}

export default function DeleteConfirmation({
  open,
  onOpenChange,
  onConfirm,
  title = "Confirm Deletion",
  description = "This action cannot be undone.",
  itemName = "this item",
  itemId
}: DeleteConfirmationDialogProps) {
  const handleCancel = () => {
    onOpenChange(false)
  }

  const handleConfirm = () => {
    onConfirm(itemId)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">{description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete {itemName}? This will permanently remove the item and all associated data.
            This action cannot be reversed.
          </p>
        </div>
        <DialogFooter className="flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button variant="outline" onClick={handleCancel} className="mt-3 sm:mt-0 bg-transparent">
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleConfirm} className="gap-2">
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
