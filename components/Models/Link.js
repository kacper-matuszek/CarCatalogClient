import Link from 'next/link'

const CarLink = props => (
    <Link href="/carDetails/[details]" as={`/carDetails/${props.details}`}>
        <a>{props.children}</a>
    </Link>
)

export default CarLink;