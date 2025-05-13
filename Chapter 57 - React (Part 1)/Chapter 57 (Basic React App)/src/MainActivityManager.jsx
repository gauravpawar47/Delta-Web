import MainActivity from "./MainActivitiy";
import "./MainActivitiy.css"

export default function MainActivityManager() {
  return (
    <div className="parent">
      <MainActivity
        title="Samsung S24 Ultra"
        description="New Flagship Samsung Phone"
        price={{ old: 100000, new: 75000 }}
      />

      <MainActivity
        title="Apple iPhone 15"
        description="New Flagship iPhone"
        price={{ old: 150000, new: 105000 }}
      />

      <MainActivity
        title="Google Pixel 8 Pro"
        description="New Flagship Google Phone"
        price={{ old: 110000, new: 85000 }}
      />
    </div>
  );
}
