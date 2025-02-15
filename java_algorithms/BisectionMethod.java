package java_algorithms;
import java.util.Scanner;
import javax.script.ScriptEngineManager;
// Nb use Maven for the java script engine manager
public class BisectionMethod {
   public BisectionMethod() {
   }

   public static void main(String[] var0) {
      Scanner var1 = new Scanner(System.in);
      System.out.print("Enter the equation (use 'x' as the variable): ");
      String var2 = var1.nextLine();
      double var3 = getValidDouble(var1, "Enter the lower bound: ");
      double var5 = getValidDouble(var1, "Enter the upper bound: ");
      double var7 = getValidDouble(var1, "Enter the error tolerance: ");
      int var9 = getValidInt(var1, "Enter the maximum number of iterations: ");
      bisectionMethod(var2, var3, var5, var7, var9);
      var1.close();
   }

   private static double evaluateFunction(String var0, double var1) {
      String var3 = var0.replace("x", String.valueOf(var1));

      try {
         return (Double)(new ScriptEngineManager()).getEngineByName("JavaScript").eval(var3);
      } catch (Exception var5) {
         System.out.println("Error evaluating the function: " + var5.getMessage());
         return Double.NaN;
      }
   }

   private static void bisectionMethod(String var0, double var1, double var3, double var5, int var7) {
      double var8 = var1;
      double var10 = var3;
      int var14 = 0;
      if (evaluateFunction(var0, var1) * evaluateFunction(var0, var3) >= 0.0) {
         System.out.println("The function must have different signs at the bounds.");
      } else {
         while((var10 - var8) / 2.0 > var5 && var14 < var7) {
            double var12 = (var8 + var10) / 2.0;
            double var15 = evaluateFunction(var0, var12);
            if (var15 == 0.0) {
               System.out.println("Exact root found: x = " + var12);
               return;
            }

            if (var15 * evaluateFunction(var0, var8) < 0.0) {
               var10 = var12;
            } else {
               var8 = var12;
            }

            ++var14;
            System.out.printf("Iteration %d: c = %.6f, f(c) = %.6f%n", var14, var12, var15);
         }

         System.out.printf("The root is approximately at x = %.6f after %d iterations.%n", (var8 + var10) / 2.0, var14);
      }
   }

   private static double getValidDouble(Scanner var0, String var1) {
      while(true) {
         System.out.print(var1);
         if (var0.hasNextDouble()) {
            double var2 = var0.nextDouble();
            var0.nextLine();
            return var2;
         }

         System.out.println("Invalid input. Please enter a valid number.");
         var0.nextLine();
      }
   }

   private static int getValidInt(Scanner var0, String var1) {
      while(true) {
         System.out.print(var1);
         if (var0.hasNextInt()) {
            int var2 = var0.nextInt();
            var0.nextLine();
            return var2;
         }

         System.out.println("Invalid input. Please enter a valid integer.");
         var0.nextLine();
      }
   }
}
