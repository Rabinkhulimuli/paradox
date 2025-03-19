
import BuildFuture from "./home/BuildFuture";
import LastPage from "./home/LastPage";
import Video from "./home/video";
import WorkCulture from "./home/WorkCulture";

function HomePage() {
  return (
    <div className="w-full space-y-6 sm:space-y-12 mb-14">
      <div className="w-full">
        <Video/>
      </div>
      <BuildFuture/>
      <WorkCulture/>
      <LastPage/>
    </div>
  );
}

export default HomePage;
