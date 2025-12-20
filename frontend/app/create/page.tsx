import PostCreator from "../../components/PostCreator";

export default function CreatePage() {
  return (
    <div className="card space-y-4">
      <h1 className="text-xl font-semibold text-white">Post creator</h1>
      <PostCreator />
    </div>
  );
}
