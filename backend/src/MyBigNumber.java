import java.lang.String;
import java.lang.StringBuilder;

public class MyBigNumber {

    String sum(String strn1, String strn2) {
        int carry = 0;
        // int sum = 0;
        StringBuilder res = new StringBuilder();

        int l1 = strn1.length() - 1;
        int l2 = strn2.length() - 1;

        while (l1 >= 0 || l2 >= 0) {
            int d1 = Character.getNumericValue(strn1.charAt(l1--));
            int d2 = Character.getNumericValue(strn2.charAt(l2--));

            int ssum = d1 + d2 + carry;
            System.out.println("d1 is: " + d1);
            System.out.println("d2 is: " + d2);
            System.out.println("sum now is: " + ssum);
            carry = ssum / 10;
            int val = ssum % 10;
            res.insert(0, val);

        }

        return res.toString();
    }

    public static void main(String[] args) {
        MyBigNumber n = new MyBigNumber();
        String s = n.sum("0", "290");

        System.out.println(s);
    }
}
