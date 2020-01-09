import Link from 'next/link'

const CarLink = props => (
    <Link href="/cars/[car]" as={`/car/details`}>
        <a>{props.children}</a>
    </Link>
)

const CarListLink = props => {
    <Link href="/cars/[catalog]" as='catalog/cars'>
        <a>{props.children}</a>
    </Link>
}
export default CarLink;
export default CarListLink;