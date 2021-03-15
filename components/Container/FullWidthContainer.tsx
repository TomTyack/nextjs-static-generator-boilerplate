import * as React from 'react'

type Props = {
  // post: IPost
  // deletePost: (id: number) => void
}

const FullWidthContainer: React.FC<Props> = ({ children  }) => {
  return (
    <>
      {/* Fill Width Container */}
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        {children}
      </section>
    </>
  )
}

export default FullWidthContainer
