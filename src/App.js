import routes from "./server";

function Index() {
  return (
    <div style={{ height: "100%" }}>
      <header style={{ height: "100%" }}>
        <div style={{ height: "100%" }}>{routes}</div>
      </header>
    </div>
  );
}

export default Index;
