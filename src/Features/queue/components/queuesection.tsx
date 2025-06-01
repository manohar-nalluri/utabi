import QueueCard from "@/Features/queue/components/queuecard";

function queuesection() {
  return (
    <div>
      <section className="px-2">
        <h3 className="font-bold mt-4 truncate ">Now Playing</h3>
        <QueueCard />
      </section>
      <section className="px-2 ">
        <h3 className="font-bold mt-4">Next Playing:</h3>
        <QueueCard />
        <QueueCard />
        <QueueCard />
        <QueueCard />
        <QueueCard />
        <QueueCard />
        <QueueCard />
        <QueueCard />
        <QueueCard />
      </section>
    </div>
  );
}

export default queuesection;
