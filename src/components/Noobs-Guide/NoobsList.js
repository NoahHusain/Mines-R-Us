import "./Noobs.css"
import { Prelude, PartOne, PartTwo, PartThree, PartFour, PartFive, PartSix, Epilogue } from "./NoobsContent";

export const NoobsList = () => {

  return (
    <>
    <h1 className="goldenRodText center">Noobs Guide</h1>

    
    <h2 className="goldenRodText center">Prelude: Introduction</h2>
    <div className="blueText paragraphs"> {Prelude()}</div>

    <h2 className="goldenRodText center">Part One: Ships</h2>
    <div className="blueText paragraphs flex">{PartOne()}</div>

    <h2 className="goldenRodText center">Part Two: Equipment</h2>
    <div className="blueText paragraphs">{PartTwo()}</div>

    <h2 className="goldenRodText center">Part Three: Consumables</h2>
    <div className="blueText paragraphs">{PartThree()}</div>

    <h2 className="goldenRodText center">Part Four: Finding & Scanning Ore Patches</h2>
    <div className="blueText paragraphs">{PartFour()}</div>

    <h2 className="goldenRodText center">Part Five: Cracking & Extracting</h2>
    <div className="blueText paragraphs">{PartFive()}</div>

    <h2 className="goldenRodText center">Part Six: Refining & Payday</h2>
    <div className="blueText paragraphs">{PartSix()}</div>

    <h2 className="goldenRodText center">Epilogue: Cautions & Congratulations </h2>
    <div className="blueText paragraphs">{Epilogue()}</div>


    </>
  );
};