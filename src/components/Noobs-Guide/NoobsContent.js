export const Prelude = () => {
  return (
    <>
      <p>
        If you are on this page that likely means you already know what Star
        Citizen is but just incase you are a poor soul who stumbled upon this
        page without a clue as to what Star Citizen is, I will give you a brief
        introduction to the game. Star Citizen is a game currently being
        developed by Cloud Imperium Games that attempts to create a living,
        breathing universe. The game prides itself in giving players the ability
        to carve their own path and gives them the tools to accomplish whatever
        they want. Want to be a space pirate? Grab yourself a ship with an EWS
        (Electronic Warfare Suite) and jam enemies warp drives leaving them
        unable to escape. Want to be an interstellar UPS driver? Accept delivery
        contracts that will have you traveling from planet to planet picking up
        and dropping off packages. Want to explore Planets, Moons, and asteroids
        In search of ore to mine? Get a ship with a minign laser and start
        raking in the big bucks. Want to be a bounty hunter? Take on mercenary
        contracts to hunt down criminals and either put them behind bars or, six
        feet under. In essence, Star Citizen is a sandbox where each player is
        free to do whatever they see fit.
      </p>

      <p>
        Now, with that out of the way you want to join the lucrative business of
        mining. Only problem is, you don’t know what you’re doing, you don’t
        have a ship, and you don’t know where to find ore. Well count your lucky
        stars because in just a few short hours you’ll be well on your way to
        becoming a real freelance miner making anywhere from 300k-500k UEC per
        hour.
      </p>
    </>
  );
};

export const PartOne = () => {
  return (
    <>
      <div className="flexParagraph">
        <div>
          <p>
            Anyone can mine in Star Citizen, but only those with the correct
            knowledge will mine EFFICIENTLY and EFFECTIVELY. The question is,
            “What do I need to accomplish those two things?” Well let’s start
            off on the biggest and most expensive piece of the solution, a ship.
            Currently there are two ship options for miners in the game. The
            solo miner Musashi Industrial & Starflight Concern Prospector (MISC
            Prospector for short) and the multicrew miner ARGO Astronautics
            Mole. Let’s discuss the Prospector first. The Prospector is a single
            crew miner with 32 units of cargo space. It houses one Size 1 mining
            laser on a ship that is 24 meters long. Currently the price to
            purchase the Prospector is 2,061,000 UEC. Meanwhile, the Mole is a
            quad crew miner with 96 units of cargo space. It houses not one, not
            two, but three Size 2 mining lasers on a 38.5 meter ship. The
            current price of the Mole is 5,130,500. So which ship is better? It
            really boils down to one question. Do you have friends that will
            mine with you? If the answer is yes, then the Mole is a good choice.
            If not, while you can Solo mine with a Mole, it is more efficient to
            use the Prospector. Now I hear you saying “But the Mole has a bigger
            mining laser seeing as it’s size 2 so wouldn’t that still make it
            better!?” Great question but no. Currently the only difference
            between Size 1 and Size 2 mining lasers is the max range at which
            you can efficiently get heat into a rock which doesn’t matter but we
            will cover that more in detail later.
          </p>
        </div>

        <div className="column">  
        <div>
          <img
            className="ships"
            alt="MISC Prospector"
            src="https://starcitizen.tools/images/d/dd/Prospector_-_Hovering_mining_on_cliffside_1.jpg?version=d91df8db9e0385c14393bbef6e39c5f1"
          ></img>
        </div>
        <div>
          <img
            className="ships"
            alt="ARGO Mole"
            src="https://i.redd.it/s3clvk6io2v51.jpg"
          ></img>
        </div>
      </div>
      </div>
    </>
  );
};

export const PartTwo = () => {
  return (
    <>
      <div className="flexParagraph2">
        <p>
          So you now have a shiny new ship with all the stock mining parts. You
          may be thinking you are ready to go out into the stars to mine and you
          are partially correct. You could go out like a true greenhorn and
          start mining with your default equipment, but you wouldn’t be able to
          get the most out of your ship doing that. To get the most out of the
          ship we are going to need some aftermarket parts. Let's look at the
          most important part that needs changing, the mining laser. The default
          mining laser is an Arbor series MH1 on the Prospector and MH2 on the
          Mole. These lasers both put out 1850 power. Now we are going to get a
          little technical so be prepared for an info dump that will make more
          sense later. There are currently six options for mining lasers in Star
          Citizen that all have their own strengths and weaknesses. All of the
          strengths and weaknesses stem from six aspects of the mining laser.
          First is energy transfer or how much output the laser has. This will
          make cracking large rocks with high mass easier. Second is range, this
          number determines how far away from the rock you can be while still
          putting in the optimum amount of energy transfer. Third is optimal
          window size. Every rock you will mine has an optimal charge zone where
          you need to keep the heat of the rock in so that you can crack it. Go
          under that zone and you can’t crack the rock, go over that green zone
          and the rock will become unstable and if kept there too long will
          explode (likely killing you). Fourth is instability, lasers are not
          perfect and the energy they output fluctuates causing spikes or dips
          in your energy output. Having a laser with a more stable beam is
          better here. Fifth is resistance. Like optimal window size, every rock
          is different on how resistant it is to the lasers energy output. A
          laser that can better focus the energy output into a smaller space on
          the rock will help mitigate the rocks resistance. Sixth and finally
          are consumable slots. We will discuss consumables in depth in part
          three.
        </p>

        <p>
          For now just know that there are currently two lasers that stand out
          above the rest for different reasons. First and my personal choice is
          the Lancet by Greycat Industries. The Lancet offers the least amount
          of power output at 1400 but has the highest level of both resistance
          and instability mitigation and a decent buff to the optimal charge
          window size. Furthermore it boasts the most amount of consumables you
          can carry at three slots. The second option is the Helix by Thermite
          Concern. The Helix offers the highest amount of energy output at 2300
          and offers some instability and resistance mitigation as well as a
          buff to optimal charge window. Just like the Lancet the Helix also has
          access to three consumable slots.
        </p>

        <div className="row">
          <div>
            <img
              className="lasers"
              alt="Greycat Industrial Lancet"
              src="https://starcitizen.tools/images/thumb/a/ad/Lancet_MH1_-_Terminal_Display_-_3.10.2.png/400px-Lancet_MH1_-_Terminal_Display_-_3.10.2.png"
            ></img>
          </div>
          <div>
            <img
              className="lasers"
              alt="Thermyte Concern Helix "
              src="https://starcitizen.tools/images/thumb/2/20/Helix_I_-_Terminal_Display_-_3.10.2.png/400px-Helix_I_-_Terminal_Display_-_3.10.2.png"
            ></img>
          </div>
        </div>

        <p>
          So which mining laser should you choose? Depends on what you are
          mining. If you are looking to mine Quantinium which is the most
          expensive ore to sell in the game but also the rarest to find you are
          going to want to get the Lancet. Why? Because Quantinium is also the
          most unstable ore in the game to mine. The instability mitigation on
          the Lancet is almost mandatory to mine Quantinium safely and
          efficiently. If you are mining anything besides Quantinium you can
          safely take the Helix for its higher energy output.
        </p>
      </div>
    </>
  );
};

export const PartThree = () => {
  return (
    <>
    <div className="flexParagraph3">
      <p>
        Consumables are temporary and expendable boosters that change the lasers
        characteristics to aid the laser operator in cracking the rock by
        modifying one or many of the five quirks discussed about mining lasers.
        All consumables are manufactured by MISC, who also created the
        Prospector mining ship from part one. These are near mandatory to carry
        to increase your effectiveness. Some are better than others and we will
        be discussing only the best of the best. First off and most important is
        Surge. Surge is an instant use consumable that overloads your lasers
        power after a slight delay instantly raising the rocks energy level by
        40%. This consumable allows the operator to not worry about the lasers
        energy output as much and will allow you to crack even the largest of
        rocks. Next up is Stampede. Stampede is a 60 second boost to the optimal
        charge rate of the rock. With this consumable, staying in the optimal
        charge zone (green zone) will crack the rock twice as fast as normal.
        Third is the Brandt consumable. Brandt alters the output of your laser
        for 30 seconds allowing it to be more stable and causing the instability
        of the rock to decrease leading to safer mining operations. Honorable
        mentions for other consumables would be Lifeline which will remove
        charge from a rock that is close to exploding, and Optimum which
        increases the optimal charge window of the rock you are mining.
      </p>

      <div className="row">
          <div>
            <img
              className="consumables"
              alt="Greycat Industrial Lancet"
              src="https://starcitizen.tools/images/1/1c/MiningConsumable-MISC-Surge.jpg"
            ></img>
          </div>
          <div>
            <img
              className="consumables"
              alt="Thermyte Concern Helix "
              src="https://starcitizen.tools/images/4/4e/MiningConsumable-MISC-Stampede.jpg"
            ></img>
          </div>
          <div>
            <img
              className="consumables"
              alt="Thermyte Concern Helix "
              src="https://starcitizen.tools/images/7/79/MiningConsumable-MISC-Brandt.jpg"
            ></img>
          </div>
        </div>
        </div>
    </>
  );
};
