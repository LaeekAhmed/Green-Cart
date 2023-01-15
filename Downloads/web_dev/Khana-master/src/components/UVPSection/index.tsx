import Chart from "./Chart";

const UVPSection = () => {
  return (
    <div>
      <div className="flexIt">
        <div id="container">
          <h1>
            CO2 Emissions per item
            <p>*Emmitions vary depending on farmer and item</p>
          </h1>
          <Chart />
        </div>

        {/* <div className="bottom">

        <span>Meal Plan ~ $2000 [The Thunderbird]</span>
        <span>|</span>
        <span>Groceries ~ $950 [Pearson PTE] </span>
      </div> */}
      </div>
    </div>
  );
};

export default UVPSection;
