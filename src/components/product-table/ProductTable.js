import React from 'react';

function ProductRow(props) {
    return (
        <tr className='product-row'>
            <td>{props.productName}</td>
            <td>{props.price}</td>
        </tr>
    );
}

function ProductCategoryRow(props) {
    return (
        <tr className='category-row'>
            <td colSpan={2}>{props.categoryName}</td>
        </tr>
    );
}

function ProductTable(props) {
    const products = props.productList.slice();
    let previousCategory = '';
    const filteredProducts = products.filter((product) => 
        (product.stocked || !props.inStockOnly) && (product.name.toUpperCase().search(props.searchText.toUpperCase()) >= 0)
    );

    if (filteredProducts.length === 0) {
        return (
            <tr>
                <td colSpan={2}>No products to display</td>
            </tr>
        );
    }
    const listItems = filteredProducts.map((product) => {
        let newCategory = product.category !== previousCategory
        previousCategory = product.category;
    
        // (or can push rows to an array)
        return (
            <React.Fragment key={product.name}>
                { newCategory && <ProductCategoryRow categoryName={product.category} /> }
                <ProductRow productName={product.name} price={product.price} />
            </React.Fragment>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody> 
                {listItems}
            </tbody>
        </table>
    );
}

function SearchBar(props) {
    return (
        <div>
            <input type='text' name='searchText' className='search-input' placeholder='Enter search text' value={props.searchText} onChange={props.handleSearchText} /><br />
            <input type='checkbox' name='inStockOnly' value={props.inStockOnly} onChange={props.handleCheckbox} />
            <label>Only show products in stock</label>
        </div>
    );
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            inStockOnly: false
        };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleSearchText(event) {
        this.setState({searchText: event.target.value});
    }

    handleCheckbox(event) {
        this.setState({inStockOnly: event.target.checked});
    }

    render() {
        const productList = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ];

        return (
            <div>
                <SearchBar searchText={this.state.searchText} inStockOnly={this.state.inStockOnly} handleSearchText={this.handleSearchText} handleCheckbox={this.handleCheckbox}/>
                <ProductTable productList={productList} searchText={this.state.searchText} inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
}

export default FilterableProductTable;