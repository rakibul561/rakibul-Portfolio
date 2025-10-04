
"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import toast from "react-hot-toast";

import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";




type BlogFormData = {
  title: string;
  content: string;
  thumbnail: string;
};

export default function AddBlog() {

    const router = useRouter()


  const form = useForm<BlogFormData>({
    defaultValues: {
      title: "",
      content: "",
      thumbnail: "",
    },
  });

  const onSubmit = async (data: BlogFormData) => {
    try {
      const modifyData = {
        ...data,
        authorId: 1,
      };

      const res = await fetch("http://localhost:5000/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifyData),
      });
      const result = await res.json();
      toast.success("Blog created Successfully");
    
      form.reset();
       router.push("/blogs"); 
        
    
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto  px-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Blog</CardTitle>
          <CardDescription>Fill out the form below</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
              id="simple-tour-form"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>blog Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter tour title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter tour location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>thumbnail</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter cost" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex  justify-end">
          <Button
            type="submit"
            form="simple-tour-form"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Create Blog
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
