import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text_center">
        Create & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-powered prompts</span>
      </h1>
      <p className="desc text-center">
        PromptGalaxy is and open-source AI prompting tool to hel
        you discover, create and share prompts
      </p>
      <Feed/>
    </section>
  )
}

export default Home