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
            current price of the Mole is 5,130,500. A quick note on cargo units. 
            Each cargo unit can carry 100 pieces of ore so that means 32 units of 
            cargo space equals 3200 units of ore. Likewise, 96 units of cargo space
            will equal 9600 units of ore. So which ship is better? It
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
          Consumables are temporary and expendable boosters that change the
          lasers characteristics to aid the laser operator in cracking the rock
          by modifying one or many of the five quirks discussed about mining
          lasers. Most consumables are manufactured by MISC, who also created the
          Prospector mining ship from part one but there are two consumables that 
          are not manufactured by them. These are near mandatory to 
          carry to increase your effectiveness. Some are better than others and
          we will be discussing only the best of the best. First off and most
          important is Surge. Surge is an instant use consumable that overloads
          your lasers power after a slight delay instantly raising the rocks
          energy level by 40%. This consumable allows the operator to not worry
          about the lasers energy output as much and will allow you to crack
          even the largest of rocks. Next up is Stampede. Stampede is a 60
          second boost to the optimal charge rate of the rock. With this
          consumable, staying in the optimal charge zone (green zone) will crack
          the rock twice as fast as normal. Third is the Brandt consumable.
          Brandt alters the output of your laser for 30 seconds allowing it to
          be more stable and causing the instability of the rock to decrease
          leading to safer mining operations. Honorable mentions for other
          consumables would be Lifeline which will remove charge from a rock
          that is close to exploding, and Optimum which increases the optimal
          charge window of the rock you are mining.
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

export const PartFour = () => {
  return (
    <>
      <div className="flexParagraph">
        <p>
          Finally after hours of prepping you have your ship, mining laser, and
          consumables ready to go. Now we can finally start talking about where
          to find ore and luckily finding ore is easy to do! Ore can be found on
          or in any planet, moon, or asteroid belt. Simply fly to a location and
          hit TAB (default key can be changed in settings) to switch to scan
          mode. In scan mode you hold down right click to charge a scan pulse.
          The pulse can be charged to anywhere between 0 and 100% and released
          at any point within that range. The stronger the ping the farther away
          it will find ore but it will also have a longer cooldown period. Once
          you start scanning and an ore patch is found, you will see a
          holographic cube on your HUD showing you a general area of where the
          ore can be found. As you get closer to the cube, continue to scan
          which will decrease the cubes size to pinpoint where the ore patch is.
          Once you are within 2km of the ore patch your ship will now display
          rock symbols on your HUD where the rocks are located. Now that you
          have found the ore patch, steady your ship and point its nose onto the
          ore patch. Hold down the left click button and your ship will begin to
          scan the rock. You will be able to see in real time the rock data
          showing up on your HUD (Mass, resistance, ore compositions present,
          etc.). You will want to pay attention to the right side of your HUD
          that gives a detailed breakdown of what ore is located within the rock
          you are scanning and at what percentage it is concentrated in. Most if
          not all rocks are a combination of many different ore types. It is up
          to you the operator to determine what ore is worth mining to you and
          at what yield percentage. Visit the Ores page to see a detailed
          breakdown of the value of each ore type along with its rarity.
        </p>

        <div className="column">
          <div>
            <img
              className="scanningUI"
              alt="Mining UI"
              src="https://starcitizen.tools/images/thumb/b/bb/Composition.jpg/677px-Composition.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export const PartFive = () => {
  return (
    <>
      <div className="flexParagraph">
        <p>
          Now that you have found an ore patch you like, you will want to
          collect the ore within the rock and store it in your ship. In order to
          do this you will first need to “crack” the rock and break it into
          smaller extractable pieces. You begin this process by initiating your
          ships mining mode by pressing “M” on the keyboard. You will see your
          mining laser extend and HUD change to the mining mode giving you the
          ore data that you scanned previously. Again point your ship towards
          the rock in mining mode to get the details needed to safely crack the
          rock. After a brief secondary scan, your HUD will modify to show you
          on the left your mining lasers current power output between 0 and 100%
          and on the right the rocks overall heat level between 0 and 100% along
          with three color zones. White is the zone every rock begins in. This
          level of heat within the rock is insufficient to cause the rock to
          crack into smaller pieces. After white is green. This is the optimal
          charge level of the rock and is where you want to keep the heat level
          within to crack the rock. After green is red, also known as the danger
          zone. If the heat of the rock reaches this level your ship will alarm
          you that the rocks heat level is at the critical level. If kept in
          this zone for too long the rock will explode and likely kill you. To
          begin, increase your mining lasers power output to maximum level.
          Scroll up on the mouse wheel and back on the mousewheel to decrease
          power level. You will see that as you increase output the rock will
          begin to visually heat up and the heat level will increase on the
          right side of the HUD. Keep your laser on full blast until you are in
          the green zone then begin to ease off the power to keep it within the
          optimal charge level. If you go into the red zone, decrease power
          significantly until you are back in the green. As you stay in the
          green or red zone, the zone will expand to the left towards the center
          of your HUD. Once that zone is full on the green, the rock will crack
          into smaller pieces. If you fill the red zone, you know what happens.
          Kaboom. Ok so you now have cracked the rock into smaller pieces and
          think you are ready to extract but you will be somewhat annoyed to
          realize that the rocks once again need to be cracked in order to get
          them small enough for extraction. Furthermore, you will need to once
          again scan each cracked rock to see their ore composition as it has
          changed from the original rock scan. Only crack the rocks that have
          the highest amount of actual ore in them while ignoring the rocks that
          have lots of filler inert materials as those are worthless to take to
          the refinery. After cracking the rocks a second time you are finally
          ready to extract. Right click while in mining mode to switch to
          extraction mode. In extraction mode your laser will extract the
          materials out of the cracked ore and bring it aboard your ship. You
          will see on the right side of your HUD that the cargo hold is now
          displayed and shows you what you are now carrying. Again, be sure to
          only extract the rocks that have the highest percentage of minerals
          within them as you don’t want to take up valuable cargo space with ore
          that is not worth it.
        </p>

        <div className="column">
          <div>
            <img
              className="miningUI"
              alt="Mining UI"
              src="https://i.redd.it/pbnhz1py3qu51.png"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export const PartSix = () => {
  return (
    <>
      <div className="flexParagraph6">
        <p>Finally, after 30 minutes of finding that payday rock, cracking it down into small pieces, and extracting only the highest yield rocks, your cargo hold is full and you are ready to get paid! Now, you have two options on how to get paid, and how much you want to get paid for your efforts. Option one is to sell the unrefined ore at a refinery. Second option is to bring the ore to a refinery, pay for them to refine it, and then take the refined ore and sell it at a trade hub. Which one is the better option? Well, let me add this little piece of info that may point you in the right direction. Refining your materials instantly doubles what they are worth. Yes, you heard that right. After refining your cargo its value will instantly double BUT there is one caveat to this. Refining takes TIME. When at a refinery and choosing to refine your raw ore they will present you with nine options for how they will refine your ore. All of them are powerful in their own way with some having quick refining times of 30 minutes, while others maximize your yield but take more time. Ultimately what refining process you choose will depend on how much time or money you are willing to spend. For me the choice is quite simple. As a miner focusing on making the most amount of profit, I am willing to wait the extra amount of time needed to have a slower but more refined refining process that outputs the most yield from my raw ore. You have two options that follow that line of thought. First is Dionyx Solvenation which is the slowest refining time in the game. For 32 units of cargo of Quantinium (the highest paying ore) you are looking at a refining time of 36 hours. Yes you heard me correctly, 36 hours of waiting. To offset this, Dinyx Solvenation is also the cheapest refining method while also yielding the highest yield at the end. If that is a bit too much waiting for you, your best option while retaining the same yield would be Pyrometric Chromalysis. This doubles the cost of refining compared to Dionyx Solvenation (which is overall fine due to Dionyx Solvenation being so cheap) and speeds up the time needed to refine from 36 hours down to 16 hours. Feel free to checkout our refineries page to see the other methods strengths and weaknesses. Miners should also take into consideration that each refinery has its own specializations on what ore they are proficient in refining. Some refineries will give you a small percentage benefit to a certain ores refinement or have a small negative percentage in refining. Ultimately the benefits are small enough to where I just go to the nearest refinery from where I filled my ship to be as time efficient as possible. You can find all refineries proficiencies and deficiencies on the refineries page. Now, after waiting for your precious ore to refine you are finally ready to sell it at a trade hub. Grab your biggest cargo freighter and head to the refinery where you dropped off your unrefined ore, navigate yourself to the refinery deck terminals and tell them to put the ore in your ship. Once that is finished you will now see the ore being stored in your cargo hold! Head to the closest major planet and their main city to sell your ore! </p>
      </div>
    </>
  );
};

export const Epilogue = () => {
  return (
    <>
      <div className="flexParagraph7">
        <p>If you have read all this, you are well equipped to begin your days as a miner in Star Citizen. This was a very high level overview of the occupation and you will learn new things as you get more and more immersed in the career. A couple final notes of caution though, be very careful when hauling your refined ore to trade markets as this is the most risky step of the entire process. If you notice there is a lot of chatter about pirates being in an area, steer well clear of that planet system as a miner transporting his cargo is a pirates fantasy! Also if you are one of the brave souls like me who mine Quantinium exclusively, note that once you bring even a single piece of ore onto your ship you have started a 15 minute timer where the Quantinium rapidly starts to become instable within your cargo hold and if not brought back to the refinery within those 15 minutes your ship will detonate. With that being said it is best when Quantinium mining to get every piece of Quantinium broken down into extractable parts and then once every piece is ready to be extracted begin that process. With that all being said, get out there and begin the lucrative career of mining! Good luck, and may El Dorado be within your reach! </p>
      </div>
    </>
  );
};
