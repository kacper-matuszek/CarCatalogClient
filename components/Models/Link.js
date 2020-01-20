import Link from 'next/link'

export const CarLink = props => (
    <Link href="/cars/[car]" as={`/cars/${props.car}`}>
        <a>{props.children}</a>
    </Link>
);

export const CarListLink = props => (
    <Link href={{ pathname: '/catalogs/[catalog]', query: {
        catalogId: props.catalogId,
        catalog: props.catalog
    }}} as={`/catalogs/${props.catalog}`}>
        <a>{props.children}</a>
    </Link>
);
