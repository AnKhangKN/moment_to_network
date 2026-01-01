export default function ExplorePage() {
  return (
    <div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <div className="p-2">
          <div className="border flex flex-col">
            <div className="bg-gray-200 h-30 w-full"></div>

            <div>
              <h2 className="p-2">Group Name</h2>

              <p className="p-2">Description of the group</p>
            </div>

            <button className="py-2 m-2 border">Xin vào</button>
          </div>
        </div>
      </div>
    </div>
  );
}
