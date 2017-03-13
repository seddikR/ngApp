package com.tek.ngapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Supplier.
 */
@Entity
@Table(name = "supplier")
public class Supplier implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "supplier_id")
    private Integer supplierId;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "contact_name")
    private String contactName;

    @OneToMany(mappedBy = "supplier")
    @JsonIgnore
    private Set<Address> addresses = new HashSet<>();

    @OneToMany(mappedBy = "supplier")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public Supplier supplierId(Integer supplierId) {
        this.supplierId = supplierId;
        return this;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public Supplier companyName(String companyName) {
        this.companyName = companyName;
        return this;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getContactName() {
        return contactName;
    }

    public Supplier contactName(String contactName) {
        this.contactName = contactName;
        return this;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public Set<Address> getAddresses() {
        return addresses;
    }

    public Supplier addresses(Set<Address> addresses) {
        this.addresses = addresses;
        return this;
    }

    public Supplier addAddress(Address address) {
        this.addresses.add(address);
        address.setSupplier(this);
        return this;
    }

    public Supplier removeAddress(Address address) {
        this.addresses.remove(address);
        address.setSupplier(null);
        return this;
    }

    public void setAddresses(Set<Address> addresses) {
        this.addresses = addresses;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public Supplier products(Set<Product> products) {
        this.products = products;
        return this;
    }

    public Supplier addProduct(Product product) {
        this.products.add(product);
        product.setSupplier(this);
        return this;
    }

    public Supplier removeProduct(Product product) {
        this.products.remove(product);
        product.setSupplier(null);
        return this;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Supplier supplier = (Supplier) o;
        if (supplier.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, supplier.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Supplier{" +
            "id=" + id +
            ", supplierId='" + supplierId + "'" +
            ", companyName='" + companyName + "'" +
            ", contactName='" + contactName + "'" +
            '}';
    }
}
