import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4};
        int target = 7;
        Set<Integer> set = new HashSet<>();
        for (int x: nums) {
            int y = target - x;
            if (set.contains(y))
                System.out.printf("%d, %d", y, x);
            set.add(x);
        }

    }
}
