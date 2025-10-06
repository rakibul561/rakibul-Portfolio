import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-4">
      <Loader className="h-8 w-8 animate-spin text-[#03E9F4]" />
      <span className="text-xl font-medium text-[#03E9F4]">Loading...</span>
    </div>
  );
};

export default Loading;