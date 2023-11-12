function HeaderSection() {
  return (
    <section className="p-4">
      <h1>
        Smart Repair Hamburg
        <br />
        Buchen Sie in 3 Schritten Ihren Smart-Repair Termin
      </h1>
      <button className="mt-3">
        <a href="#multistep">Jetzt Smart Repair anfragen</a>
      </button>
      <button className="mt-2 button-secondary">
        <a href="#info">Auftragsstatus einsehen</a>
      </button>
      <div className="flex flex-col gap-y-1 mt-5">
        <div className="icon-p">
          Für Parkschäden, Dellen, Kratzer, Steinschläge und Innenraum
        </div>
        <div className="icon-p">Kostengünstig und schnell</div>
        <div className="icon-p">
          Einfach Foto schicken und zum Festpreis reparieren lassen
        </div>
      </div>
    </section> //Das ist Github
    //Hallo
  );
}

export default HeaderSection;
