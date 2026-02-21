export const metadata = {
  title: "Virtual Tour | Antiguo Casino de Puerto Rico",
  description:
    "Explore our venue from anywhere. Take a virtual tour of Antiguo Casino de Puerto Rico.",
};

export default function VirtualTourPage() {
  return (
    <div className="flex flex-col">
      <h1 className="sr-only">Virtual Tour</h1>
      <div className="w-full min-h-[calc(100vh-4rem)]">
        <iframe
          title="Antiguo Casino Virtual Tour"
          src="https://my.matterport.com/show/?m=JhggsALeNkV"
          className="h-full w-full min-h-[calc(100vh-4rem)] border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
