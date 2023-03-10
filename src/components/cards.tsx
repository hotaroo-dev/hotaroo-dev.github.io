import React from 'react'
import styled from 'styled-components'
import { posts } from '../data'
import { Text } from '../style'

interface IProps {
  offset?: number
}

const Cards: React.FC<IProps> = ({ offset }) => {
  return (
    <Container>
      {posts.slice(0, offset).map((post, idx) => (
        <Card key={idx}>
          <a
            href={`https://github.com/hotaroo-dev/${post.title.replace(
              /\s/g,
              '-'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <source
                media="(max-width: 40rem)"
                srcSet={`./posts/post${idx}-min.jpg`}
              />
              <source srcSet={`./posts/post${idx}.webp`} type="image/webp" />
              <img src={`./posts/post${idx}.jpg`} alt={post.title} />
            </picture>
            <Overview>{post.description}</Overview>
          </a>
        </Card>
      ))}
    </Container>
  )
}

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;

  @media screen and (min-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 0.5rem;
    box-shadow: #0003 0px 1px 2px 0px, #0002 0px 1px 3px 1px;
  }
`

const Overview = styled(Text)`
  margin-top: 0.75rem;
  opacity: 0.8;
`

export default React.memo(Cards)
