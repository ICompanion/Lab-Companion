package business;

import java.util.Date;

public class Bill {

    private int id;
    private float amount;
    private Date creationDate;
    private boolean payed;
    private String billingAdress;

    public Bill(int id, float amount, Date creationDate, boolean payed,
                String billingAdress) {
        this.id = id;
        this.amount = amount;
        this.creationDate = creationDate;
        this.payed = payed;
        this.billingAdress = billingAdress;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public boolean isPayed() {
        return payed;
    }

    public void setPayed(boolean payed) {
        this.payed = payed;
    }

    public String getBillingAdress() {
        return billingAdress;
    }

    public void setBillingAdress(String billingAdress) {
        this.billingAdress = billingAdress;
    }
}
