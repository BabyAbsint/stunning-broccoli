import Feed from "../../components/Feed";

export default function FeedPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-white">Public feed</h1>
      <Feed />
    </div>
  );
}
