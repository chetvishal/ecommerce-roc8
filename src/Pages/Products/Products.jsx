import { Container, Row, Col, Form, Button, CardGroup } from "react-bootstrap";
import { ProdCard } from "../../Components";
import { products } from "../../Assets/ProdData";
import { useState } from "react";


export const Products = () => {

    const [filters, setFilters] = useState({
        size: [],
        brands: [],
        for: "",
        sortBy: ""
    })

    function filterProducts(prodList, filterObj) {
        let newList = prodList;

        if (filterObj.size.length !== 0) {
            console.log('here')
            newList = newList.filter(item => {
                console.log(filterObj.size.includes(item.size))
                return filterObj.size.includes(item.size)
            })
        }
        if (filterObj.brands.length !== 0) {
            newList = newList.filter(item => filterObj.brands.includes(item.brand))
        }
        if (filterObj.for !== "") {
            newList = newList.filter(item => filterObj.for === item.for)
        }
        if (filterObj.sortBy !== "") {
            if (filterObj.sortBy === 'LOW_TO_HIGH')
                newList.sort((a, b) => a.price - b.price)
            else
                newList.sort((a, b) => b.price - a.price)
        }
        console.log("newlist", newList)
        return newList;
    }

    const handleSizeChange = e => {
        if (e.target.checked) {
            setFilters({ ...filters, size: [...filters.size, e.target.name] })
        }
        else {
            setFilters({ ...filters, size: filters.size.filter(i => i !== e.target.name) })
        }
    }

    const handleBrandChange = e => {
        if (e.target.checked) {
            setFilters({ ...filters, brands: [...filters.brands, e.target.name] })
        }
        else {
            setFilters({ ...filters, brands: filters.brands.filter(i => i !== e.target.name) })
        }
    }

    const handleIdealChange = e => {
        if (e.target.checked) {
            setFilters({ ...filters, for: e.target.name })
        }
    }

    const handleSortChange = e => {
        if (e.target.checked) {
            setFilters({ ...filters, sortBy: e.target.name })
        }
    }

    const finalList = filterProducts(products, filters)
    // console.log(products., filters)

    return (
        <>
            <Container fluid="sm" className="mt-3">
                <Row>
                    <Col sm={3} style={{ border: "1px solid black", textAlign: "left" }} className="p-2">
                        <Form>
                            <h3>Size</h3>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="S" name="S" onChange={handleSizeChange} />
                                <Form.Check type="checkbox" label="M" name="M" onChange={handleSizeChange} />
                                <Form.Check type="checkbox" label="L" name="L" onChange={handleSizeChange} />
                                <Form.Check type="checkbox" label="XL" name="XL" onChange={handleSizeChange} />
                            </Form.Group>
                            <h3>Brands</h3>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Adidas" name="ADIDAS" onChange={handleBrandChange} />
                                <Form.Check type="checkbox" label="Nike" name="NIKE" onChange={handleBrandChange} />
                                <Form.Check type="checkbox" label="Supreme" name="SUPREME" onChange={handleBrandChange} />
                                <Form.Check type="checkbox" label="Champion" name="CHAMPION" onChange={handleBrandChange} />
                                <Form.Check type="checkbox" label="Levis" name="LEVIS" onChange={handleBrandChange} />
                                <Form.Check type="checkbox" label="h & m" name="H&M" onChange={handleBrandChange} />
                            </Form.Group>
                            <h3>For</h3>
                            <Form.Group className="mb-3" controlId="kindOfStand">
                                <Form.Check type="radio" label="Men" name="MEN" checked={filters.for === "MEN"} onChange={handleIdealChange} />
                                <Form.Check type="radio" label="Women" name="WOMEN" checked={filters.for === "WOMEN"} onChange={handleIdealChange} />
                            </Form.Group>
                            <h3>Sort by</h3>
                            <Form.Group className="mb-3" controlId="kindOfStand">
                                <Form.Check
                                    type="radio"
                                    label="High to Low"
                                    checked={filters.sortBy === "HIGH_TO_LOW"}
                                    onChange={handleSortChange}
                                    name="HIGH_TO_LOW"
                                />
                                <Form.Check
                                    name="LOW_TO_HIGH"
                                    type="radio"
                                    label="Low to High"
                                    checked={filters.sortBy === "LOW_TO_HIGH"}
                                    onChange={handleSortChange}
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={() => setFilters({
                                size: [],
                                brands: [],
                                for: "",
                                sortBy: ""
                            })}>
                                Clear
                            </Button>
                        </Form>
                    </Col>
                    <Col sm={9} style={{ border: "1px solid black", textAlign: "center" }} className="p-2">
                        <CardGroup>
                            {finalList.map(item => {
                                return <ProdCard data={item} />
                            })}
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )

}