import datetime

class HyperactiveDeveloper:
    def __init__(self, name):
        self.name = name
        self.skills = ["MERN Stack", "Python", "TypeScript", "Next.js", "C#"]

    def work(self):
        current_time = datetime.datetime.now()
        if self.is_sleeping(current_time):
            print(f"{self.name} is currently sleeping... 💤")
        else:
            print(f"{self.name} is hyperactively coding with {', '.join(self.skills)}!")
            if current_time.hour >= 18 and current_time.hour < 22:
                self.take_rest()
            elif current_time.hour >= 22 or current_time.hour < 6:
                print(f"{self.name} is sleeping.")
            else:
                self.is_working()

    def is_sleeping(self, current_time):
        # Assume sleeping is important for hyperactive developers!
        # Insert your own sleep logic here if needed.
        if current_time.hour >= 22 or current_time.hour < 6:
            return True
        return False

    def is_working(self):
        # Assume the developer is working most of the time
        print("Developer is working.")

    def take_rest(self):
        print(f"{self.name} is taking a rest. How about checking out some new games and series on Netflix?")

if __name__ == "__main__":
    developer = HyperactiveDeveloper("Dhruv Verma")
    developer.work()