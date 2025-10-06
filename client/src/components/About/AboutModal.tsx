import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoveLeft, MoveRight } from "lucide-react";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        
        <Button
          variant="outline"
          className="text-[#0592E0] text-xl flex items-center gap-2"
        >
          WHY YOU ARE HiRE ME <MoveRight />
        </Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[500px] text-white"
        style={{
          background: `linear-gradient(
            to bottom left,
            #05163b,
            #092152,
            #010610,
            #010610,
            #092152,
            #010610
          )`,
        }}
      >
        <DialogHeader>
          <DialogTitle className="">WHY YOU ARE HiRE ME: 👇 </DialogTitle>
          <hr />
          <DialogDescription className="text-xl mt-6 p-2">
            I am a Full stack, Backend or Frontend  developer and I have
            React/Next.js,Redux, JavaScript, Tailwindcss, Node.js, express.js, MongoDB, Mongoose, PostgreSQL, Prisma,
            etc skills, I have been working on these skills for a long time. A
            few days ago I work a team project and I work this project overall 2
            months, So I can collaborate well with any team and highly motivated
            to learn and contribute to creating user-friendly web applications. <br />
            <br />
            So if you give me an opportunity to work with your team based on my
            skills then I can create any user-friendly smooth web applications.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="outline" className="text-[#0592E0]">
              {" "}
              <MoveLeft /> Back{" "}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
