package myPreciousPlants.plant;

public class PlantLabel {
	private static String autoGeneratedLabel;
	private static String customLabel;

	public static String getAutoGeneratedLabel() {
		return autoGeneratedLabel;
	}

	public void setAutoGeneratedLabel() {
		//sequential or random?
		
		//also, figure out how to auto-generate labels 
		//when some are chosen to be custom
	}

	public static String getCustomLabel() {
		return customLabel;
	}

	public static void setCustomLabel(String label) {
		customLabel = label;
	}

}