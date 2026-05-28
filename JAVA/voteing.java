public class voteing {

    String name;
    int age;

    public voteing(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public static void main(String[] args) {

        voteing vote = new voteing("Ranjan", 20);

        System.out.println("Name: " + vote.name + ", Age: " + vote.age);
    }
}