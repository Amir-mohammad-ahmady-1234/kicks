import { MessageSquare } from "lucide-react";

function page() {
  return (
    <section className="h-full flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="relative bg-linear-to-br   ">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mb-32" />
          <div className="relative p-8 md:p-10 text-center">
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-20" />
              <div className="absolute inset-2 bg-primary/20 rounded-full animate-pulse" />
              <div className="relative w-full h-full bg-linear-to-br from-primary to-primary/80 rounded-2xl shadow-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <MessageSquare className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-gray-600 via-gray-400 to-primary bg-clip-text text-transparent mb-3">
              گفتگوی خود را شروع کنید
            </h2>
            <p className="text-gray-500  text-base md:text-lg mb-8 leading-relaxed">
              هنوز هیچ چتی انتخاب نکردی! از لیست سمت چپ یک گفتگو رو انتخاب کن
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
