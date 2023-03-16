import './About.css'

function About() {
  console.log();
  return (
    <div id="about">
      <div className="about">
        <div className="head_chef"/>
        <div className="about__text">
          <h2 className="about__title">Head Chef</h2>
          <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida velit. Vivamus tincidunt elit sit amet mi tempor feugiat. Donec ultricies consequat mollis. Nulla facilisi. Praesent vitae bibendum elit, nec dapibus odio. Fusce aliquam, lorem vel volutpat rhoncus, massa sapien blandit arcu, nec egestas felis velit eget est.</p>
        </div>
      </div>
      <div className="about">
        <div className="about__text">
          <h2 className="about__title">Owner and Chef</h2>
          <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec gravida velit. Vivamus tincidunt elit sit amet mi tempor feugiat. Donec ultricies consequat mollis. Nulla facilisi. Praesent vitae bibendum elit, nec dapibus odio. Fusce aliquam, lorem vel volutpat rhoncus, massa sapien blandit arcu, nec egestas felis velit eget est.</p>
        </div>
        <div className="owner_chef"/>
      </div>
    </div>
  )
}

export default About
